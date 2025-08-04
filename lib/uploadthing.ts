// lib/uploadthing.ts

import {
  generateUploadButton,
  generateUploadDropzone,
  generateUploader,
} from "@uploadthing/react";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
// We now generate each component individually using the new functions
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const Uploader = generateUploader<OurFileRouter>();