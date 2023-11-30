'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/styles/style.css';
import {
	faClipboardUser,
	faReceipt,
	faQuestionCircle,
	faAddressCard,
	faRightFromBracket,
	faClock,
	faCertificate
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function DashboardPage() {
	const router = useRouter();
	const [data, setData] = React.useState({
		username: '',
		employee_id: '',
	});
	const logout = async () => {
		try {
			await axios.get('/api/users/logout');
			setLoading(true);
			toast.success('Logout Success');
			router.push('/login');
		} catch (error: any) {
			console.log(error.message);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const getUserDetails = async () => {
		const res = await axios.get('/api/users/newuser');
		setData({
			username: res.data.user.name,
			employee_id: res.data.user.employee_id,
		});
	};
	type ProductType = {
		_id: string,
		employee_id: string;
		time_in: string;
		time_out: string;
		date: string;
	};
	type optionss = {
		date: string;
		time_in: string;
	}
	type ProductRowz = {
		attendanceItemq: optionss;
		key: React.Key; // You can use 'React.Key' for the type of 'key'
	};

	type ProductRowProps = {
		attendanceItem: ProductType;
		key: React.Key; // You can use 'React.Key' for the type of 'key'
	};

	function AttendanceRow({ attendanceItem }: ProductRowProps) {
		return (
			<tr>
				<td>{attendanceItem.date}</td>
				<td>{attendanceItem.time_in}</td>
				<td>{attendanceItem.time_out}</td>
			</tr>
		);
	}

	function ProductRowzz({ attendanceItemq }: ProductRowz) {
		return (
			<option>{attendanceItemq.date}</option>
		);
	}

	const [attendanceData, setAttendanceData] = useState<ProductType[]>([]);
	const [selectedOption, setSelectedOption] = useState('');
	const handleChange = (e) => {
		const selectedValue = e.target.value;
		setSelectedOption(selectedValue);
	
		// Find the corresponding attendance item based on the selected value
		const selectedAttendanceItem = attendanceData.find(item => item.date === selectedValue);
	
		// Print the time_in value
		if (selectedAttendanceItem) {
		  console.log('this is it',selectedAttendanceItem.time_in);
		}
	  };
	const getAttendanceData = async () => {
		try {
			const res = await axios.get('/api/users/time'); // Replace with your actual endpoint
			setAttendanceData(res.data.user); // Assuming the response contains an array of attendance data
			console.log('this is user timed in totals is:', res.data.tax[0].TaxableIncome[0].salary);
			console.log('this is the data of user', res.data.user.employee_id);

		} catch (error: any) {
			console.error(error.message);
			// Handle error
		}
	};

	useEffect(() => {
		getUserDetails();
		getAttendanceData(); // Fetch attendance data when the component mounts
	}, []);

	const [loading, setLoading] = React.useState(false);

	return (
		<div>
			<div className="Sidebar">
				<header className="head"></header>

				<ul>
					<li>
						<a
							href="#"
							className="logo"
						>
							<Image
								src="/images/logo.png"
								width={50}
								height={50}
								alt="Picture of the author"
							/>
							<span className="nav-e">
								{loading ? 'Processing ...' : 'Employee'}
							</span>
						</a>
					</li>
					<li>
						<a href="/time">
							<FontAwesomeIcon
								icon={faClock}
								className="fas"
							/>
							<span className="nav-item">TimeIn</span>
						</a>
					</li>
					<li>
						<a href="/dashboard">
							<FontAwesomeIcon
								icon={faClipboardUser}
								className="fas"
							/>
							<span className="nav-item">Attendance</span>
						</a>
					</li>

					<li>
						<a href="/payslip">
							<FontAwesomeIcon
								icon={faReceipt}
								className="fas"
							/>
							<span className="nav-item">Payslip</span>
						</a>
					</li>

					<li>
						<a href="/201files">
							<FontAwesomeIcon
								icon={faQuestionCircle}
								className="fas"
							/>
							<span className="nav-item">201 files</span>
						</a>
					</li>
					<li>
						<a href="/time">
							<FontAwesomeIcon
								icon={faClock}
								className="fas"
							/>
							<span className="nav-item">Time In</span>
						</a>
					</li>
					
					<li>
						<a href="/coe">
							<FontAwesomeIcon
								icon={faCertificate}
								className="fas"
							/>
							<span className="nav-item">CoE Request</span>
						</a>
					</li>

					<li>
						<a href="/aboutme">
							<FontAwesomeIcon
								icon={faAddressCard}
								className="fas"
							/>
							<span className="nav-item">About Me</span>
						</a>
					</li>

					<li>
						<a
							href="/login"
							className="logout"
							onClick={(e) => {
								e.preventDefault();
								logout();
							}}
						>
							<FontAwesomeIcon
								icon={faRightFromBracket}
								className="fas"
							/>
							<span className="nav-item">Log-Out</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="title">
				<h1>ATTENDANCE</h1>
			</div>

			<div className="position">
				<aside>
					<p className="compname">WB Majesty Marketing Corporation</p>
				</aside>
				<aside>
					<p>
						{' '}
						Name: <span>{data.username}</span>{' '}
					</p>

					<p>
						{' '}
						Employee ID: <span>{data.employee_id}</span>{' '}
					</p>
					
					
				</aside>
			</div>
			<div className="outer">
				<div className="table-w">

					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Time In</th>
								<th>Time Out</th>
							</tr>
						</thead>
						<tbody>
							{attendanceData.map((attendanceItem) => (
								<AttendanceRow
									key={attendanceItem._id}
									attendanceItem={attendanceItem}
								/>
							))}
						</tbody>

					</table>

				</div>
			</div>
		</div>
	);
}
