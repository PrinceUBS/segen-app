import styled from "@emotion/styled";
import { Card, IconButton, OutlinedInput, Theme } from "@mui/material";

const SearchInput = styled(OutlinedInput)({
    borderRadius: "7px",
    fontFamily: "Jost",
    fontSize: "14px",
    fontWeight: "400",
});
const MenuButton = styled(IconButton)({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
});

interface ProductAdType {
    theme?: Theme;
    $bg: string | undefined;
}

const ProductAdCardComp = styled(Card)(({ theme, $bg }: ProductAdType) => ({
    width: "100%",
    backgroundColor: $bg || "#ccf1f6",
    borderRadius: "7px",
    padding: "20px",
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
}));

const ContactCardComp = styled(Card)(({ theme, $bg }: ProductAdType) => ({
    width: "100%",
    backgroundColor: $bg || "#D8EDF4",
    borderRadius: "7px",
    padding: "20px",
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
}));

export { SearchInput, MenuButton, ProductAdCardComp, ContactCardComp };