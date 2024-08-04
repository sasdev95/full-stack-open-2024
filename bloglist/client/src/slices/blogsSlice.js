import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import blogService from '../services/blogs';

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        setBlogs(state, action) {
            return action.payload;
        },
        addBlog(state, action) {
            state.push(action.payload);
        },
        updateBlog(state, action) {
            return state.map(blog => blog.id !== action.payload.id ? blog : action.payload);
        },
        appendComment(state, action) {
            const { id, comment } = action.payload;
            const blog = state.find(blog => blog.id === id);
            if (blog) {
                blog.comments = blog.comments.concat(comment);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(removeBlog.fulfilled, (state, action) => {
                return state.filter(blog => blog.id !== action.payload);
            })
            .addCase(removeBlog.rejected, (state, action) => {
                console.error('Failed to delete the blog:', action.payload);
            });
    }
});

export const { setBlogs, addBlog, updateBlog, appendComment } = blogsSlice.actions;

export const fetchBlogs = () => async dispatch => {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
};

export const removeBlog = createAsyncThunk('blogs/removeBlog', async (blogId, { rejectWithValue }) => {
    try {
        await blogService.remove(blogId);
        return blogId;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const commentBlog = (id, comment) => async dispatch => {
    const commentData = await blogService.addComment(id, comment);
    dispatch(appendComment({ id, comment: commentData }));
};

export default blogsSlice.reducer;