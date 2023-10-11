import { Cloudinary } from "@cloudinary/url-gen";

export const generateCloudinaryURL = (src: string | null, props = {}) => {
  if (!src) return null;
  // If the image is not hosted on Cloudinary, don't do anything.
  if (!src.includes('cloudinary')) return src;

  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME
    }
  });

  let cldSrc = cld.image(src)
    .format('auto')
    .delivery('q_auto');

  // Uncomment the following line if you want to support resizing by width and height
  // .resize(`c_crop,w_${props.width},h_${props.height},g_face`);

  if (src.startsWith('https://')) {
    cldSrc.setDeliveryType('fetch');
  }

  return cldSrc.toURL();
}

// Usage:
// const imageURL = generateCloudinaryURL(Astro.props.src, Astro.props);
