import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/utils/supabase/client";

function getStorage() {
    const { storage } = createClient();
    return storage;
}

interface UploadProps {
    file: File;
    bucket: string;
    folder?: string;
}

export async function uploadFile({
    file,
    bucket,
    folder
}: UploadProps) {
    const path = `${folder ? folder + "/" : ""}${uuidv4()}.md`;

    // imageCompression 관련 코드를 제거하였습니다.
    // .mb 파일을 처리하기 위해 추가적인 압축이나 변환을 하지 않습니다.

    const storage = getStorage();

    const { data, error } = await storage.from(bucket).upload(path, file);

    if (error) {
        return { fileUrl: "", error: "File upload failed" };
    }

    // .mb 파일 업로드 후 반환되는 파일 URL
    const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/${bucket}/${data?.path}`;

    return { fileUrl, error: "" };
}
