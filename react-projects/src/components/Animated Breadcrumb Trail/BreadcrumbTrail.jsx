import React from "react";
import { motion } from "framer-motion"
import BreadcrumbSegment from "./BreadcrumbSegment"

const BreadcrumbTrail = ({ path, onNavigate }) => {
    return (
        <nav className="flex items-center space-x-3 py-4">
            {path.map((segment, index) => {
                const isLast = index === path.length - 1
                return (
                    <React.Fragment key={index}>
                        <BreadcrumbSegment
                            label={segment}
                            isActive={isLast}
                            onClick={() => onNavigate(index)}
                            delay={index * 0.1}
                            isFirst={index === 0}
                        />
                        {!isLast && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.1, duration: 0.3 }}
                                className="text-gray-400 dark:text-gray-500 text-sm"
                            >
                                &rsaquo;
                            </motion.span>
                        )}
                    </React.Fragment>
                )
            })}
        </nav>
    )
}

export default BreadcrumbTrail