import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const CustomSwitch = withStyles((theme) => ({
    root: {
        width: 55,
        height: 26,
        padding: 1,
        margin: theme.spacing(1),
      },
      switchBase: {
        padding: 1,
        '&$checked': {
          transform: 'translateX(28px)',
          color: theme.palette.common.white,
          '& + $track': {
              background: '#131A32',
              opacity: 1,
              border: 'none',
          },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid grey',
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 26 / 2,
        background: 'linear-gradient(to left, #FDBF25, #B417EB, #0D57FF, #2D9CB4)',
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
      },
      checked: {},
      focusVisible: {},
}))(({ classes, ...props }) => {
    return (
      <Switch
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
          }}
          {...props}
      />
    );
});

export default CustomSwitch;