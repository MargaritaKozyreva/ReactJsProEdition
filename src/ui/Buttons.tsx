const ButtonsTheme = {
  design: {
    primary: {
      color: '#212121',
      background: '#F2CB07',
    },
    success: {
      color: '#212121',
      background: '#73D677',
    },
    accent: {
      color: '#212121',
      background: '#07D6F2',
    },
  },
  size: {
    xs: {
      height: '15.88px',
      fontSize: '12px',
      lineHeight: '14,06px',
      padding: '10px 12px',
      boxShadow: 'inset 0px -3px 0px rgba(0, 0, 0, 0.18)',
      ':active': {
        boxShadow: 'inset 0px -2px 0px rgba(0, 0, 0, 0.18)',
        paddingBottom: '9px',
      },
    },
    m: {
      width: '231px',
      height: '66px',
      fontSize: '23px',
      padding: '0 20px 9px',
      boxShadow: 'inset 0px -9px 0px rgba(0, 0, 0, 0.18)',
      ':active': {
        boxShadow: 'inset 0px -6px 0px rgba(0, 0, 0, 0.18)',
        paddingBottom: '6px',
      },
    },
  },
  isAbsoluteWidth: {
    width: '100%',
  },
};

export default ButtonsTheme;
