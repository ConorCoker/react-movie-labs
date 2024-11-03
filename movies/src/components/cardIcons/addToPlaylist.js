import React from "react";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";
import { Link } from "react-router-dom";

const AddToPlaylistIcon = ({ movie }) => {
  return (
    <Link
      to={`/`}
      state={{
          movieId: movie.id,
      }}
    >
      <PlaylistIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default AddToPlaylistIcon;