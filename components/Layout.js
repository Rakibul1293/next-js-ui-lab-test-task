import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => {
	return {
		page: {
			background: '#f9f9f9',
			width: '100%',
			paddingTop: theme.spacing(3)
		},
		root: {
			display: 'flex',
		},
		drawer: {
			width: drawerWidth
		},
		drawerPaper: {
			width: drawerWidth,
			background: '#663399',
			color: '#fff'
		},
		appBar: {
			background: '#f9f9f9',
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1)
		},
		appBarFullWidth: {
			background: '#f9f9f9',
			width: "100%"
		},
		navbar: {
			flexGrow: 1
		},
		toolbar: theme.mixins.toolbar,
		menuButton: {
			marginRight: theme.spacing(2),
		},
		search: {
			color: '#000',
			position: 'relative',
			borderRadius: "25px",
			backgroundColor: '#FFFFFF',
			'&:hover': {
				backgroundColor: '#FFFFFF',
			},
			marginLeft: 0,
			width: '400px',
			padding: '3px 0'
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputRoot: {
			color: 'inherit',
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
		iconSpacer: {
			marginLeft: theme.spacing(2),
			marginRight: theme.spacing(2),
			cursor: "pointer",
			color: "#663399",
			position: "relative"
		},
		iconTopNumberBcColor: {
			background: '#663399',
			height: "13px",
			width: "13px",
			borderRadius: "50%",
			position: "absolute",
			top: "-5px",
			right: "-1",
			top: "-6px",
			right: "-4px",
			color: "#fff",
			fontSize: "9px"
		},
		iconTopNumber: {
			position: "absolute",
			top: "1px",
			right: "4px"
		},
		imgRounder: {
			borderRadius: "0%",
			cursor: "pointer"
		},

		// Sidebar
		logoTopBottomGap: {
			padding: "30px 0px 30px 0px",
			textAlign: "center",
			cursor: "pointer"
		},
		sidebarIconTopBottomGap: {
			padding: theme.spacing(3),
			textAlign: "center",
			position: "relative",
			'&:hover': {
				cursor: "pointer",
				background: "#7D48B1",
				width: "45%",
				margin: "auto",
				borderRadius: "10%",
				transition: "background 0.7s ease-out",
				"& $sidebarItem": {
					position: "relative",
					transform: "translateY(-30%)",
					"& $sidebarIconBottomText": {
						display: "block",
						margin: "0",
						position: "absolute",
						fontSize: "85%"
					}
				}
			}
		},
		sidebarIconBottomText: {
			display: "none"
		},
		sidebarItem: {
			position: "static",
		},
		active: {
			background: "#7D48B1",
			width: "80%",
			margin: "auto",
			borderRadius: "10%",
			"& $sidebarItem": {
				position: "relative",
				transform: "translateY(-30%)",
				"& $sidebarIconBottomText": {
					display: "block",
					margin: "0",
					position: "absolute",
					fontSize: "85%"
				}
			}
		}
	}
})

export default function Layout({ children }) {
	const [menuItems, setMenuItems] = useState([]);
	const [open, setOpen] = useState(true);

	const classes = useStyles();
	const router = useRouter();
	
	useEffect(() => {
		fetch('https://next-js-ui-lab-test-task-api.herokuapp.com/api/menuItems')
		  .then(res => res.json())
		  .then(data => setMenuItems(data.data))
	}, [])

	const handleDrawer = () => {
		setOpen(!open);
	};

	return (
		<div className={classes.root}>
			{/* app bar */}
			<AppBar
				position="fixed"
				className={open ? classes.appBar : classes.appBarFullWidth}
				elevation={0}
				color="primary"
			>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawer}
					>
						<MenuIcon style={{ color: "#663399" }} />
					</IconButton>

					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon style={{ color: "#bdbdbd" }} />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div className={classes.navbar}></div>

					<Image width='15' height='15' src="/img/Arrow-Cross.png" />
					<div className={classes.iconSpacer}>
						<NotificationsNoneIcon />
						<div className={classes.iconTopNumberBcColor}><span className={classes.iconTopNumber}>3</span></div>
					</div>
					<Avatar src="/img/adult-img.png" className={classes.imgRounder} />
				</Toolbar>
			</AppBar>

			{/* drawer */}

			{
				open &&
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{ paper: classes.drawerPaper }}
					anchor="left"
				>
					<div className={classes.logoTopBottomGap}>
						<Link href="/"><Image width='50%' height='25%' src="/img/logo.png" /></Link>
					</div>

					{
						menuItems.map((item) => (
							<>
								<div className={router.asPath == item.path ? classes.active : null} key={item.id}>
									<div className={classes.sidebarIconTopBottomGap}>
										<div className={classes.sidebarItem} onClick={() => router.push(item.path)}>
											<span><Image width='30' height='30' src={item.icon} /></span>
											<Typography variant="body2" className={classes.sidebarIconBottomText}>{item.text}</Typography>
										</div>
									</div>
								</div>
							</>
						))
					}
				</Drawer>
			}

			{/* main content */}
			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	)
}
