// Centralized app configuration

// Prefer environment variables; fall back to known working defaults when not provided
export const CLOUDINARY_CLOUD_NAME = (import.meta?.env?.VITE_CLOUDINARY_CLOUD_NAME || "daz2pyisr").trim();
export const CLOUDINARY_UPLOAD_PRESET = (import.meta?.env?.VITE_CLOUDINARY_UPLOAD_PRESET || "chat_uploads").trim();

export function isCloudinaryConfigured() {
  return Boolean(CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET);
}

// Debug helper (can be commented out later)
// console.log("Cloudinary config:", { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET });


