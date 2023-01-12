import React from 'react'
import BlogCard from './BlogCard'
import { Grid } from '@mui/material' 

const Blog = () => {
  return (
    <Grid container pl={2} pt={3}>
        <Grid item lg={3} pb={3} >
            <BlogCard/>
        </Grid>
        <Grid item lg={3} >
            <BlogCard/>
        </Grid>
        <Grid item lg={3}>
            <BlogCard/>
        </Grid>
        <Grid item lg={3}>
            <BlogCard/>
        </Grid>
        <Grid item lg={3}>
            <BlogCard/>
        </Grid>
        <Grid item lg={3} pb={3}>
            <BlogCard/>
        </Grid>

    </Grid>
  )
}

export default Blog