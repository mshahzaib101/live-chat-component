import React, { Component } from 'react';
import './LiveChat.css';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { PulseLoader } from 'react-spinners';
import Buttonlogo from './button-logo.png';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';









const theme = createMuiTheme({
    palette: {
      primary: {
          main:'#1565c0',
      },
    },
  });


const styles = theme => ({
    picicon:{
        borderRadius:'50%',
        padding:'2px',
        color: '#ffffff',
        backgroundColor: '#1565c0',
        marginRight:'2px',
        '&:hover': {
            color: '#000000',    
            backgroundColor: '#1565c0',      },
    },
    
    fabicon:{
        width:'15px',
        height:'15px',
    },
        
    submitbutton:{
        float: 'left',
        marginLeft: '2px',
    },
    iconbutton:{
        border: '2px solid #1565c0',
        display:'inline-block',
        padding:'8px',
        color:'#1565c0'
    },
    downiconbutton:{
        color:'#1565c0',
        display:'inline-block',
        margin: '0px',
        },
    fixedconbutton: {
        borderRadius: '50%',
        textTransform: 'none',
        color:'#1565c0',
        border: '1px solid',
        fontSize: '18px',
        padding:'18px',
    },
    fixedtextField:{
        marginBottom: '15px',
        width:'100%'
    },
    msgtextField:{
        fontSize:'15px',
    },
    paper1:{
        padding: '2px 5px',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        width: '90%',
    },
    crossicon2:{
        height: '30px',
        width: '30px',
    },
    bigAvatar: {
        width: 50,
        height: 50,
      },
      bigAvatar2: {
        width: 60,
        height: 65,
      },
  });

var timeout;

class LiveChat extends Component {
    constructor(props){
        super(props);
        this.state = {
            //display for animation
            con1: 'block',
            con2: 'none',
            opc2:'0',
            con3: 'none',
            opc3:'0',
            con4: 'none',
            opc4:'0',
            con5: 'none',
            opc5:'0',
            con6: 'none',
            opc6:'0',
            con7: 'none',
            opc7:'0',
            con8: 'none',
            opc8:'0',
        }
    }

    //click handlers for changing displays
    clickHandler1 = () => {
        this.setState({ 
            con2: 'block',
            con1: 'none',
        })
        setTimeout(()=>{
            this.setState({
                opc2:'1',
            })
        },1)
    }
    clickHandler2 = () => {
        this.setState({ 
            con3: 'block',
            con4: 'block',
            con2: 'none',
        })
        setTimeout(()=>{
            this.setState({
                opc2:'0',
                opc3:'1',
                opc4:'1',
            })
        },1)
    }
    clickHandler3 = () => {
        this.setState({ 
            opc3:'0',
        })
        setTimeout(()=>{
            this.setState({
                con3: 'none',
                con4: 'none',
                con2: 'block',
                opc4:'0',
                opc2:'1',
            })
        },200)
    }
    clickHandler4 = () => {
        this.setState({ 
            con4: 'none',
            con5: 'block',
            opc3:'0',
        })
        setTimeout(()=>{
            this.setState({
                opc3:'1',
                opc4:'0',
                opc5:'1',
            })
        },1)
    }
    clickHandler5 = () => {
        this.setState({ 
            opc3:'0',
        })
        setTimeout(()=>{
            this.setState({
                opc5:'0',
                con5: 'none',
                con3: 'none',
                con1: 'block',
            })
        },200)
    }
    clickHandler6 = () => {
        this.setState({ 
            opc3:'0',
            con5: 'none',
            con6: 'block',
        })
        setTimeout(()=>{
            this.setState({
                opc3:'1',
                opc5:'0',
                opc6:'1',
            })
        },200)
        timeout = setTimeout(()=>{
            this.clickHandler8();
        },2000)
    }
    clickHandler7 = () => {
        //canceling running timeout
        clearTimeout(timeout);

        this.setState({ 
            opc3:'0',
        })
        setTimeout(()=>{
            this.setState({
                opc6:'0',
                con3: 'none',
                con6: 'none',
                con1: 'block',
            })
        },200)
        
    }

    clickHandler8 = () => {
        this.setState({ 
            opc3:'0',
        })
        setTimeout(()=>{
            this.setState({
                con6: 'none',
                con3: 'none',
                con7: 'block',
                opc6:'0',
                opc7:'1',
            })
        },200)
    }
    clickHandler9 = () => {
        this.setState({ 
            con7: 'none',
            opc7:'0',
            con3: 'block',
        })
        setTimeout(()=>{
            this.setState({
                opc3:'1',
                con8: 'block',
                opc8:'1',
            })
        },100)
    }
    clickHandler10 = () => {
        this.setState({ 
            opc3:'0',
        })
        setTimeout(()=>{
            this.setState({
                con3: 'none',
                con8: 'none',
                opc8:'0',
                con1: 'block',
            })
        },200)
    }
    clickHandler11 = () => {
        this.setState({ 
            opc3:'0',
        })
        setTimeout(()=>{
            this.setState({
                con8:'none',
                opc8:'0',
                con3: 'none',
                con7: 'block',
                opc7:'1',
            })
        },200)
    }


    handleStop=(a,b)=>{
        console.log('stop',b.x, b.y)
        console.log('h', window.screen.height)
    }

  render() {
    const { classes } = this.props;
    return (
      <div className="LiveChat-container" >

      <div className='initial-display' style={{'display':this.state.con1}} onClick={this.clickHandler1}>
      <p className='fixedbtn-text'>
       Need Live Support?
       </p>
       <IconButton className={classes.iconbutton} aria-label="Click" onClick={this.clickHandler1}>
        <ClearIcon />
      </IconButton>
       </div> 

       <div className='Avatar-container' style={{'display':this.state.con2,'opacity': this.state.opc2}}>
       <IconButton onClick={this.clickHandler2}>
       <Avatar alt="live-button" src={Buttonlogo} className={classes.bigAvatar} />
       </IconButton>
        </div>

       <div className='Calling-container' style={{'display':this.state.con3,'opacity': this.state.opc3}}>
       <div  className='aaa' style={{'display':this.state.con4,'opacity': this.state.opc4}}>
       
        <h4 className='fixed-head top-head'>Talk to a human</h4>
        <IconButton className={classes.downiconbutton} aria-label="down" onClick={this.clickHandler3}>
        <DownIcon />
      </IconButton>
        <p className='fixed-p'>We'll connect you through your webcam to a human who can assist you with your question</p>
        <p className='fixed-p p2-con2'>We'll be able to see you and all the actions you'll take on this website</p>
        <Button className={classes.fixedconbutton} onClick={this.clickHandler4}>
        start
        </Button>
        <p className='p3-con2'>powered by <span className='fixed-s1'>mountain</span></p>
        </div> 

        <div style={{'display':this.state.con5,'opacity': this.state.opc5}}>
        <h4 className='fixed-head p-con3'>We've let the support team know that you are trying to reach them</h4>
        <p className='fixed-p p-con3'>We usually respond <br />within <span className='fixed-s1'>5 minutes</span></p>
        <MuiThemeProvider theme={theme}>
        <div className='con3-textfield-con'>
        <TextField
          id="reasonforcall-textarea"
          label="reason for call"
          multiline
          rows='4'
          className={classes.fixedtextField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="email"
          label="email"
          className={classes.fixedtextField}
          variant="outlined"
        />
         <Button onClick={this.clickHandler6} color='primary' variant="contained" className={classes.submitbutton}>
         Submit
         </Button>
        </div>
       
        </MuiThemeProvider>
        
        <div className='button-con3'>
        <Tooltip title="Cancel">
        <Button className={classes.fixedconbutton} onClick={this.clickHandler5}>
        <ClearIcon className={classes.crossicon2} />
        </Button>
        </Tooltip>
        </div>
        </div> 

        <div style={{'display':this.state.con6,'opacity': this.state.opc6}}>
        <p className='fixed-p p-con4'>Connecting you with Albert</p>
        <div className='con4-loader'>
        <PulseLoader
         
          sizeUnit={"px"}
          size={15}
          color={'#1565c0'}
          loading={true}
        />
        </div>
        <div className='button-con3'>
        <Tooltip title="Cancel">
        <Button className={classes.fixedconbutton} onClick={this.clickHandler7}>
        <ClearIcon className={classes.crossicon2} />
        </Button>
        </Tooltip>
        </div>
        </div>

        <div className='chat-con' style={{'display':this.state.con8,'opacity': this.state.opc8}}>
        <div className='avater-con'>
        <Avatar alt="caller-pic" src='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0OTM2NTg1NzQz/tom-cruise-9262645-1-402.jpg' className={classes.bigAvatar2} />
        </div>
        <MuiThemeProvider theme={theme}>
        <div className='chatIconCon'>
        <IconButton className={classes.picicon} onClick={this.clickHandler10}>
        <ClearIcon className={classes.fabicon} />
        </IconButton>
        <IconButton className={classes.picicon} onClick={this.clickHandler11}>
        <FullscreenIcon className={classes.fabicon} />
        </IconButton >
        </div>
        </MuiThemeProvider>
        <div className='ads-con'>
        <p className='ad-p ad-p1'>I think that this is the best advertising platform that fits with your budget</p>
        <p className='ad-p ad-p2'>here's the suggestion for advertising google ads</p>
        <p className='ad-p ad-p1'>I want to understand the ad revenue structure</p>
        </div>
        <div className='msg-con'>
        <Paper className={classes.paper1} elevation={1}>
        <InputBase className={classes.msgtextField} placeholder="Type something" />
     
        <IconButton className={classes.Addcon} >
        <AddIcon className={classes.fabicon} />
        </IconButton >
        </Paper>
        </div>
        </div>

        </div>
       
        <div  style={{'display':this.state.con7,'opacity': this.state.opc7}} className='Avatar-container' >
        <Draggable
         onStop={this.handleStop}
        >
       <IconButton onClick={this.clickHandler9}>
       <Avatar alt="caller-pic" src='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0OTM2NTg1NzQz/tom-cruise-9262645-1-402.jpg' className={classes.bigAvatar2} />
       </IconButton>
       </Draggable>
        </div>


      </div>
    );
  }
}

LiveChat.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LiveChat);