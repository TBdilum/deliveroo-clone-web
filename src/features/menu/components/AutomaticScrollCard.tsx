import { Box } from "@mui/material";
import ScrollCard from "./ScrollCard";

const AutoScrollingCardSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px 0", // Adjust as needed
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Stack rows vertically
          overflow: "hidden", // Hide scrollbars
          width: "100%",
        }}
      >
        {/* First row */}
        <Box
          sx={{
            display: "flex",
            animation: "scrollLeft 90s linear infinite", // Continuous scroll animation
            gap: 0, // No space between cards
          }}
        >
          {/* First set of images */}
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/eb03fc27b1/burrito-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e5c61788bc/sandwich-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/21834aa4e7/mozzarellasalad-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/54666f0dc9/partner-nandos.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/6480579f84/fries-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/914ec270d0/eggs.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/3fee0c3871/edamame-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/bc83c233c1/deliveroo-hop.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/357deffd34/curry-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/4114eeb85b/pizza-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/527a3b013e/ramen-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/76ba414158/cola.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/05c929c369/strawberries.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/ab9081697f/partner-waitrose.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/376343eac1/salad-zoomed-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/c0900bcb47/partner-wagamama.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/67b5ac9f34/cupcake.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/9788ec70a6/partner-fiveguys.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/82dc7c7b73/cheesecake.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x255/e50bd99ee7/sushi-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/294e8b5572/berry-dessert.jpg" />
          </Box>

          {/* Clone the images for seamless scrolling */}
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/eb03fc27b1/burrito-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e5c61788bc/sandwich-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/21834aa4e7/mozzarellasalad-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/54666f0dc9/partner-nandos.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/6480579f84/fries-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/914ec270d0/eggs.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/3fee0c3871/edamame-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/bc83c233c1/deliveroo-hop.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/357deffd34/curry-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/4114eeb85b/pizza-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/527a3b013e/ramen-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/76ba414158/cola.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/05c929c369/strawberries.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/ab9081697f/partner-waitrose.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/376343eac1/salad-zoomed-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/c0900bcb47/partner-wagamama.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/67b5ac9f34/cupcake.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/9788ec70a6/partner-fiveguys.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/82dc7c7b73/cheesecake.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x255/e50bd99ee7/sushi-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/294e8b5572/berry-dessert.jpg" />
          </Box>
        </Box>

        {/* Second row */}
        <Box
          sx={{
            display: "flex",
            animation: "scrollLeft 90s linear infinite", // Continuous scroll animation
            gap: 0, // No space between cards
          }}
        >
          {/* Second set of images */}
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/76ba414158/cola.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/05c929c369/strawberries.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/ab9081697f/partner-waitrose.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/376343eac1/salad-zoomed-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/c0900bcb47/partner-wagamama.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/67b5ac9f34/cupcake.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/9788ec70a6/partner-fiveguys.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/82dc7c7b73/cheesecake.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x255/e50bd99ee7/sushi-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/eb03fc27b1/burrito-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e5c61788bc/sandwich-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/21834aa4e7/mozzarellasalad-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/54666f0dc9/partner-nandos.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/6480579f84/fries-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/914ec270d0/eggs.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/3fee0c3871/edamame-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/bc83c233c1/deliveroo-hop.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/357deffd34/curry-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/4114eeb85b/pizza-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/527a3b013e/ramen-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/76ba414158/cola.jpg" />
          </Box>

          {/* Clone the images for seamless scrolling */}
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/76ba414158/cola.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/05c929c369/strawberries.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/ab9081697f/partner-waitrose.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/376343eac1/salad-zoomed-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/c0900bcb47/partner-wagamama.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/67b5ac9f34/cupcake.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/9788ec70a6/partner-fiveguys.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/82dc7c7b73/cheesecake.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x255/e50bd99ee7/sushi-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/eb03fc27b1/burrito-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/e5c61788bc/sandwich-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/21834aa4e7/mozzarellasalad-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/54666f0dc9/partner-nandos.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/6480579f84/fries-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/914ec270d0/eggs.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/3fee0c3871/edamame-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/bc83c233c1/deliveroo-hop.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/357deffd34/curry-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/4114eeb85b/pizza-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/527a3b013e/ramen-wide.jpg" />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ScrollCard image="https://img2.storyblok.com/filters:format(webp)/f/62776/256x256/76ba414158/cola.jpg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AutoScrollingCardSection;
