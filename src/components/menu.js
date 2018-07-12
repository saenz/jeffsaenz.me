import React from 'react'
import {Link} from 'gatsby'
import styled, {css} from 'react-emotion'
import { Container } from 'reactstrap'
import avatar from '../images/jeff.jpg'
import Headroom from 'react-headroom'

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

const Menu = () => (
	<header>
	   <Headroom>
	    	<nav className="navbar  navbar-dark bg-primary" style={{justifyContent: 'start'}}>
		       	{/*<Container>*/}
				    {/*<Link to="/" className="navbar-brand">*/}
				        <Avatar className="d-inline-block align-top">
				          <div className="avatar-image">
				            <img src={avatar} width={AVATAR_IMG_SIZE} height={AVATAR_IMG_SIZE} alt="" />
				          </div>
				        </Avatar>
				        <div className="card-info d-inline-block align-top" style={{borderLeft: "2px solid white", paddingLeft: ".5rem"}}>
				          <div className={fullName}>Jeff Saenz</div>
				          <div className={profession}>Front End Web Developer</div>
				        </div>
				    {/*</Link>*/}
				{/*</Container>*/}
			</nav>
		</Headroom>
	</header>
)

export default Menu