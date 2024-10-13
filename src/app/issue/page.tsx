'use client'
import Button from "@/components/Button";
import Topbar from "@/components/Topbar";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const Issue = () => {
  const router = useRouter();
    const handleButtonClick= ()=>{
        router.push("/issue/services")
    }
  return (
    <>
      <Topbar
        title="Issue"
        leftIcon={<IoIosArrowBack fontSize={'24px'} />}
      />
       <div className="flex items-center justify-center min-h-screen">
        <div className="w-full p-4 space-y-4">
        <Button
          type="button"
          onClick={handleButtonClick}
          size="block"
          variant="primary"
        >
          New Issue
        </Button>
        <Button
          type="button"
          onClick={handleButtonClick}
          size="block"
          variant="primary"
        >
          Past Issue
        </Button>
        <Button
          type="button"
          onClick={handleButtonClick}
          size="block"
          variant="primary"
        >
          New Issue
        </Button>
      </div>
      </div>
    </>
  );
}

export default Issue;
