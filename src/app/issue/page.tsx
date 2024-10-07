'use client'
import Button from "@/components/Button";

const Issue = () => {
    const handleButtonClick= ()=>{
        console.log("hello")
    }
  return (
    <div className="space-y-4">
       <Button type="button" onClick={handleButtonClick} size="block" variant="primary">New Issue</Button>
      <Button type="button" onClick={handleButtonClick} size="block" variant="primary">Past Issue</Button>
      <Button type="button" onClick={handleButtonClick} size="block" variant="primary">New Issue</Button>
    </div>
  )
}

export default Issue;
