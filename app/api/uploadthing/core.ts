import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// This is your FileRouter. It defines the "endpoints" for your uploads.
export const ourFileRouter = {
  // We're creating one endpoint called "imageUploader".
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Here you would add middleware for authentication if you wanted.
    // For now, we'll allow anyone to upload.
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata);
      console.log("file url", file.url);
      return { uploadedBy: "someone" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;