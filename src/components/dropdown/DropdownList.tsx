import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import Portal from '@mui/material/Portal'
import { useStyles } from './Dropdown.styles'

import { MenuProps, options } from './utils'

const DropdownList = () => {
  const { classes } = useStyles()

  const [selected, setSelected] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string[]
    setSelected(value)
  }

  return (
    <Portal>
      <div className={classes.container}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="multiple-checkbox-label"> Person </InputLabel>
          <Select
            labelId="multiple-checkbox-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => (selected as string[]).join(', ')}
            input={<OutlinedInput label="Person" />}
            MenuProps={MenuProps}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={selected.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Portal>
  )
}

export default DropdownList

// import React, { useState } from 'react'
// import InputLabel from '@mui/material/InputLabel'
// import OutlinedInput from '@mui/material/OutlinedInput'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import ListItemText from '@mui/material/ListItemText'
// import Select from '@mui/material/Select'
// import Checkbox from '@mui/material/Checkbox'
// import Menu from '@mui/material/Menu'
// import Button from '@mui/material/Button'
// import { options } from './utils'
// import { useStyles } from './Dropdown.styles'

// const DropdownList = () => {
//   const { classes } = useStyles()

//   const [selected, setSelected] = useState<string[]>([])

//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     const value = event.target.value as string[]
//     setSelected(value)
//   }

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   return (
//     <div className={classes.container}>
//       <Button onClick={handleClick}>Open Dropdown</Button>
//       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//         <FormControl sx={{ m: 1, width: 300 }}>
//           <InputLabel id="multiple-checkbox-label"> Person </InputLabel>
//           <Select
//             labelId="multiple-checkbox-label"
//             multiple
//             value={selected}
//             onChange={handleChange}
//             renderValue={(selected) => (selected as string[]).join(', ')}
//             input={<OutlinedInput label="Person" />}
//           >
//             {options.map((option) => (
//               <MenuItem key={option} value={option}>
//                 <Checkbox checked={selected.indexOf(option) > -1} />
//                 <ListItemText primary={option} />
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Menu>
//     </div>
//   )
// }

// export default DropdownList
