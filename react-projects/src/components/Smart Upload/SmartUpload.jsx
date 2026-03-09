import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { File, Image, Video, FileText, CheckCircle, RefreshCw } from "lucide-react";

const categorizeFile = (file) => {
    if (file.type.startsWith("image")) return "image";
    if (file.type.startsWith("video")) return "video";
    if (file.type.includes("pdf")) return "document";
    return "file";
};

const categoryIcon = (type) => {
    switch (type) {
        case "image":
            return <Image size={18} />;
        case "video":
            return <Video size={18} />;
        case "document":
            return <FileText size={18} />;
        default:
            return <File size={18} />;
    }
};

export default function SmartUpload() {
    const [files, setFiles] = useState([]);

    const simulateUpload = (id) => {
        let progress = 0;

        const interval = setInterval(() => {
            progress += Math.random() * 20;

            setFiles((prev) =>
                prev.map((f) =>
                    f.id === id
                        ? {
                            ...f,
                            progress: Math.min(progress, 100),
                            status: progress >= 100 ? "done" : "uploading"
                        }
                        : f
                )
            );

            if (progress >= 100) clearInterval(interval);
        }, 500);
    };

    const onDrop = useCallback((acceptedFiles) => {
        const mapped = acceptedFiles.map((file) => {
            const id = crypto.randomUUID();

            const newFile = {
                id,
                file,
                preview: URL.createObjectURL(file),
                category: categorizeFile(file),
                progress: 0,
                status: "uploading"
            };

            simulateUpload(id);

            return newFile;
        });

        setFiles((prev) => [...prev, ...mapped]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const retryUpload = (id) => {
        setFiles((prev) =>
            prev.map((f) =>
                f.id === id ? { ...f, progress: 0, status: "uploading" } : f
            )
        );

        simulateUpload(id);
    };

    return (
        <div
            {...getRootProps()}
            className={`min-h-screen p-10 transition-all duration-300
      ${isDragActive ? "bg-blue-50 scale-[1.01]" : "bg-slate-50"}`}
        >
            <input {...getInputProps()} />

            {/* Upload Hub */}

            <div className="text-center mb-12">
                <div
                    className={`mx-auto w-40 h-40 rounded-3xl flex items-center justify-center
          bg-white shadow-lg border border-slate-200
          transition-all duration-300
          ${isDragActive ? "scale-110 ring-4 ring-blue-200" : ""}`}
                >
                    <File size={42} className="text-blue-500" />
                </div>

                <h1 className="text-2xl font-semibold mt-6">
                    Drag files anywhere to upload
                </h1>

                <p className="text-slate-500 mt-2">
                    Images, videos, PDFs and documents supported
                </p>
            </div>

            {/* Files Grid */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {files.map((file) => (
                    <motion.div
                        key={file.id}
                        initial={{ y: 20, scale: 0.85, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className={`relative bg-white rounded-xl shadow-md overflow-hidden
            hover:shadow-lg transition`}
                    >
                        {/* Thumbnail */}

                        {file.category === "image" ? (
                            <img
                                src={file.preview}
                                className="w-full h-32 object-cover"
                            />
                        ) : (
                            <div className="h-32 flex items-center justify-center bg-slate-100">
                                {categoryIcon(file.category)}
                            </div>
                        )}

                        {/* Content */}

                        <div className="p-3">
                            <div className="flex items-center justify-between text-sm">
                                <span className="truncate">{file.file.name}</span>
                                {categoryIcon(file.category)}
                            </div>

                            {/* Progress */}

                            <div className="mt-2 h-2 bg-slate-200 rounded">
                                <div
                                    className="h-full bg-blue-500 rounded transition-all duration-300"
                                    style={{ width: `${file.progress}%` }}
                                />
                            </div>

                            {/* Status */}

                            <div className="mt-2 flex justify-end">
                                {file.status === "done" && (
                                    <CheckCircle className="text-green-500 animate-bounceTiny" size={18} />
                                )}

                                {file.status === "error" && (
                                    <button
                                        onClick={() => retryUpload(file.id)}
                                        className="text-red-500"
                                    >
                                        <RefreshCw size={18} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Liquid Progress Overlay */}

                        <div
                            className="absolute bottom-0 left-0 w-full bg-blue-400/20 transition-all"
                            style={{ height: `${file.progress}%` }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}