import dotenv from "dotenv";
dotenv.config();

let token = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

export const fetchShopifyProducts = async () => {
  let url = "https://randomapp1.myshopify.com/admin/api/2025-04/products.json";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
  });

  let data = await response.json();
  console.log("Data fetched from Shopify:", data);
  const productResponse = data;
  const imageData = [];

  productResponse.products.forEach((product) => {
    product.images.forEach((image) => {
      imageData.push({
        productId: product.id,
        imageId: image.id,
        src: image.src,
        alt: image.alt || product.title,
        createdAt: image.created_at,
      });
    });
  });

  return imageData;
  
};

