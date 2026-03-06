export function SaveStatus({state}){

  if(state==="saving") return <span>Saving...</span>
  if(state==="saved") return <span>✓ Saved</span>
  return <span>Unsaved</span>

}