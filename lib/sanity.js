import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { config } from "./config";
export const client = createClient(config);
if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
export const imageBuilder = imageUrlBuilder(client);

export const urlFor = (source) => imageBuilder.image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (usePreview) => (usePreview ? previewClient : client);
export default client;
