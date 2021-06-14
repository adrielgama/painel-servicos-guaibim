import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ marginTop: 30 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Grupo Ramiro Campelo | DTI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
