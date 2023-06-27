import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import styled from "styled-components";
import user from "../assets/95098921.jpeg";
import { Stack } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        bgcolor="primary"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"}  color ={"text.primary"} p={3} borderRadius={5}>
          <Typography
            variant="h6"
            fontweight={100}
            color="gray"
            textAlign="center"
          >
            Create Post{" "}
          </Typography>
          <UserBox>
            <Avatar alt="aimen Abdesselam" src={user} />
            <Typography>Aimen Abdesselam</Typography>
          </UserBox>
          <TextField
            id="outlined-textarea"
            label="your idea"
            placeholder="what do you think"
            multiline
            fullWidth
            variant="standard"
          />
          <Stack direction="row" spacing={1} mt={2} mb={2}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddAlt1Icon color="error" />
          </Stack>

          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button sx={{width : "350px"}} >
                Post
            </Button>
            <Button>
                <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
