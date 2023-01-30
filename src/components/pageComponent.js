import * as React from 'react'
import { Box } from '@mui/system';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Paper from '@mui/material/Paper';
import { _unstable_createJob } from 'gatsby-plugin-sharp';

const Page = ({ children }) => {
    return (
        <div class="PaperClass">
            <Paper elevation={1}>
                {/* <Box as="ul" direction="column" space={10} spaceElement="li">
                    {children}
                </Box> */}
            </Paper>
        </div>
    )
}

export default Page