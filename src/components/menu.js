import React from 'react'
import styled, {css} from 'react-emotion'
import avatar from '../images/jeff-min.jpg'
import {Link} from 'gatsby'

const AVATAR_IMG_SIZE = 48

const Avatar = styled.div`
	position: relative;
	//height: 63px;
	//margin-left: 1rem;
	margin-right: .5rem;
	display: inline-block;

	& > img {
	  width: 16px;
	  height: 16px;
	  top: 44px;
	  left: 20px;
	  position: absolute;
	  border-radius: 15%;
	  background-color: white;
	  box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);
	}

	.avatar-image {
	  border-color: #4c9e59;
	  border-style: solid;
	  border-width: 2px;
	  border-radius: 50%;
	  box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);
	  width: 52px;
	  height: 52px;
	}

	.avatar-image img {
	  border-style: solid;
	  border-width: 2px;
	  border-radius: 50%;
	  width: ${AVATAR_IMG_SIZE}px;
	  height: ${AVATAR_IMG_SIZE}px;
	  object-fit: cover;
	  border-color: white;
	}
`
const fullName = css`
  color: rgba(0,0,0,0.87);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.25rem;
`

const profession = css`
  color: white;
  letter-spacing: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  line-height: 1rem;
`

// burger
const burger = css`
	background: none;
	padding: 0;
	margin: 0;
	border: 0;
	width: 24px;
	height: 20px;
	position: relative;
	display: inline-block;
	cursor: pointer;
	vertical-align: middle;
	&:focus {
		outline: none;
	}
`
const line = css`
	background: #474c55;
    display: block;
    height: 4px;
    border-radius: 1px;
    position: absolute;
    width: 100%;
`

const bun = props =>
	css`
		${line};
		opacity: ${props.burgerOpen ? 0 : 1};
	    transform: scale(${props.burgerOpen ? .5 : 1});
	    transition: all .5s;
	    ${props.side} : 0;
	`

const Bun = styled('i')(bun)

const patty = props =>
	css`
		${line};
		top: 50%;
    	margin-top: -2px;
    	transform: rotateZ(${props.burgerOpen ? props.rotatez : "0deg"});
    	transition: transform .5s
	`

const Patty = styled('i')(patty)

// menu
class Menu extends React.Component {
	render() {
		return (
	    	<nav className="navbar navbar-dark bg-primary" style={{justifyContent: 'flex-start'}}>
	    		<button className={burger} onClick={this.props.toggleSideMenu}>
	    			<Bun side={"top"} burgerOpen={this.props.isOpen} />
	    			<Patty rotatez={"45deg"} burgerOpen={this.props.isOpen} />
	    			<Patty rotatez={"-45deg"} burgerOpen={this.props.isOpen} />
	    			<Bun side={"bottom"} burgerOpen={this.props.isOpen} />
	    		</button>
		        <div style={{display: "flex", alignItems: "center", marginLeft: "2rem"}}>
			        <Avatar className="d-inline-block align-top">
			          	<Link to="/">
			          		<div className="avatar-image">
			            		<img src={avatar} width={AVATAR_IMG_SIZE} height={AVATAR_IMG_SIZE} alt="" />
			         		</div>
			         	</Link>
			        </Avatar>
			        <div className="card-info d-inline-block align-top" style={{borderLeft: "2px solid white", paddingLeft: ".5rem"}}>
			          <div className={fullName}>Jeff Saenz</div>
			          <div className={profession}>Front End / Full Stack Web Dev <span className="d-none d-md-inline"></span></div>
			        </div>
		    	</div>
			</nav>
		)
	}
}

export default Menu
