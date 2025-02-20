import { Box, Typography } from "@mui/material";
import { Colors } from "../../../theme";

type CategoryChipProps = {
  data: {
    id: number;
    name: string;
  };
  onClick: (id: number) => void;
  selected: boolean;
};

const CategoryChip = ({ data, onClick, selected }: CategoryChipProps) => {
  const handleOnClick = () => {
    onClick(data.id);
  };

  return (
    <Box
      onClick={handleOnClick}
      sx={{
        backgroundColor: selected
          ? Colors.background.brand
          : Colors.background.defaultLight,
        color: selected ? Colors.text.inverse : Colors.background.brand,
        borderRadius: "20px",
        border: "none",
        fontWeight: selected ? "bold" : "regular",
        cursor: "pointer",
        paddingLeft: "1rem",
        mr: 1,
        px: 2,
        py: 0.5,
        whiteSpace: "nowrap",
      }}
    >
      <Typography>{data.name}</Typography>
    </Box>
  );
};

export default CategoryChip;
