import axios from 'axios';
import * as React from 'react';
import PropTypes from 'prop-types';

export default function TypographyAccordion(props) {
    const [blogDetail, setBlogDetail] = React.useState([]);
  
    React.useEffect(() => {
      axios.get(`http://localhost:6060/BlogDetail?BlogId=${props.id}`)
        .then((response) => {
          setBlogDetail(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, [props.id])
  
    TypographyAccordion.propTypes = {
      id: PropTypes.string.isRequired,
    };
    return (
      <div>
        {blogDetail.map((blog) =>
          <li key={blog.BlogDetailId}>{blog.BlogContent}</li>
        )}
      </div>
    )
  
  
  }