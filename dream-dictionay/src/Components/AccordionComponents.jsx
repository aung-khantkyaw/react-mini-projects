import axios from 'axios';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TypographyAccordion from './TypographyAccordion';

export default function AccordionComponents() {
  const [blogHeader, setBlogHeader] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:6060/BlogHeader')
      .then((response) => {
        setBlogHeader(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <div>
      {blogHeader.map((blog) =>
        <Accordion key={blog.BlogId}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content-"
            id="panel-header-"
          >
            <Typography>{blog.BlogTitle}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TypographyAccordion id={blog.BlogId} />
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
}