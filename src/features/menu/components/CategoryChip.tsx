import { Box, Typography } from "@mui/material";

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
        backgroundColor: selected ? "#00b8a9" : "#ffffff",
        color: selected ? "#ffffff" : "#00b8a9",
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
