import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5,
    };

    return (
        <div>
            <div style={blogStyle}>
                <Typography className="blogTitleAuthor">
                    <Link to={`/blogs/${blog.id}`}>
                        {blog.title} by {blog.author}
                    </Link> &nbsp;
                </Typography>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
};

export default Blog;