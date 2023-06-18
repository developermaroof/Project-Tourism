import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://media.timeout.com/images/105124791/750/422/image.jpg"
        alt=""
        height={325}
      />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut fuga
        numquam inventore eaque aliquid voluptatibus consequatur porro quam
        tenetur laudantium dolores harum, labore unde ducimus dolore sapiente
        eum ipsam autem culpa ex praesentium perspiciatis. Officiis ab ducimus
        dolorem, a cumque unde reprehenderit, itaque debitis sed aliquid
        deleniti molestias commodi explicabo?
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frequently Asked Questions
      </Typography>
      <CustomizedAccordions />
    </Box>
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);
export default Tour;
