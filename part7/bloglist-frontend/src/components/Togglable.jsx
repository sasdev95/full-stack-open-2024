import { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from '@mui/material'

const Togglable = forwardRef((props, refs) => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    useImperativeHandle(refs, () => {
        return {
            toggleVisibility,
        };
    });

    return (
        <Box>
            {!visible && (
                <Button variant="contained" onClick={toggleVisibility} sx ={{ marginBottom: 2 }}>
                    {props.buttonLabel}
                </Button>
            )}
            {visible && (
                <Box>
                    {props.children}
                    <Button variant="contained" color="secondary" onClick={toggleVisibility} sx ={{ marginTop: 2 }}>
                        Cancel
                    </Button>
                </Box>
            )}
        </Box>
    );
});

Togglable.displayName = 'Togglable';

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};

export default Togglable;
