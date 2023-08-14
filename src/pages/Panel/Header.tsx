import React, {  } from 'react';
import { AppBar, FormControl, Stack, Select, MenuItem, Button, Toolbar, Typography } from '@mui/material';


export const Header = ({ projects, selectedProject, setSelectedProject }) => {

    const handleProjectChange = (e) => {
        setSelectedProject(e.target.value);
    }

    const toolbarItems = () => {
      if (projects.length > 0) {
        return (
          <Toolbar style={{ justifyContent: 'space-between' }}>
          <FormControl variant="outlined">
            <Select
              labelId="project-label"
              id="projects"
              value={selectedProject}
              onChange={handleProjectChange}
              label="Select Project"
            >
            {projects.map((project) => (
              <MenuItem key={project.project_id} value={project.project_id}>
              {project.name}
              </MenuItem>
            ))}
            </Select>
          </FormControl>
          <Stack direction="row">
            <Button color="inherit">Docs</Button>
            <Button color="inherit">Logout</Button>
          </Stack>
          </Toolbar>
        );
      } else {
        return (
          <Toolbar>
            <Typography> <a href="https://console.deepgram.com/login" target='_blank'>Login From Console</a> </Typography>
          </Toolbar>
        )
      }
    }

    return (
    <AppBar position="static">
      {toolbarItems()}
    </AppBar>
  )
};