import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phasecor Healthcare - Quality Healthcare within Reach",
    short_name: "Phasecor",
    description:
      "Phasecor Healthcare is a pharmaceutical and clinical healthcare brand formulating evidence-backed medicines and dermatological solutions across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#071714",
    theme_color: "#2D8F7A",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
