import { InvoicingIcon, SettingsIcon } from '../assets/Icons';
import SelectMenu from './SelectMenu';
import ToggleWithRightLabel from './ToggleWithRightLabel';
import { useState } from 'react';
import React from 'react'

const tabs = [
	{ name: 'Settings', href: '#', icon: SettingsIcon },
	{ name: 'Invoicing', href: '#', icon: InvoicingIcon },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className='w-full'>
			<div className='sm:hidden'>
				<label htmlFor='tabs' className='sr-only'>
					Select a tab
				</label>
				<select id='tabs' name='tabs' className='block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'>
					{tabs.map((tab) => (
						<option key={tab.name}>{tab.name}</option>
					))}
				</select>
			</div>
			<div className='hidden sm:block'>
				<div className='border-b border-gray-200'>
					<nav className='-mb-px flex space-x-8' aria-label='Tabs'>
						{tabs.map((tab, tabIdx) => (
							<a
								key={tab.name}
								href={tab.href}
								className={classNames(
									toggleState === tabIdx ? 'border-blue-900 text-blue-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
									'group inline-flex items-center p-3 border-b-2 font-medium flex-col text-xs'
								)}
								onClick={() => toggleTab(tabIdx)}
								aria-current={toggleState === tabIdx ? 'page' : undefined}>
								<tab.icon
									strokeWidth='1.5'
									className={classNames(toggleState === tabIdx ? 'text-blue-900' : 'text-gray-500 group-hover:text-gray-700', 'stroke-current -ml-0.5 mb-0.5 mr-2 h-6 w-6')}
									aria-hidden='true'
								/>
								<span>{tab.name}</span>
							</a>
						))}
					</nav>
				</div>
			</div>
			<>
				<div className={classNames(toggleState === 0 ? 'block' : 'hidden', 'bg-white w-full py-4 border-gray-200')}>
					<div className='grid grid-cols-12 gap-6'>
						<div className='flex items-center col-span-3'>
							<h3 className='text-sm font-medium leading-none text-gray-500'>Status</h3>
							{/* <p className='mt-1 text-sm text-gray-500'>Use a permanent address where you can receive mail.</p> */}
						</div>
						<div className='col-span-9'>
							<form action='#' method='POST'>
								<div className='grid grid-cols-12 gap-6'>
									<div className='col-span-6 sm:col-span-3 grid grid-flow-row gap-3'>
										<SelectMenu label='Order Status' />
										<ToggleWithRightLabel title='Customer Waiting' />
										<ToggleWithRightLabel title='Work Completed' />
									</div>

									<div className='col-span-6 sm:col-span-3'>
									  <SelectMenu label='Service Advisor' />
									</div>
									
									<div className='col-span-6 sm:col-span-3'>
										<label htmlFor='country' className='block text-sm font-medium text-gray-700'>
											Country / Region
										</label>
										<select
											id='country'
											name='country'
											autoComplete='country'
											className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
											<option>United States</option>
											<option>Canada</option>
											<option>Mexico</option>
										</select>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className={classNames(toggleState === 1 ? 'block' : 'hidden', 'bg-white w-full py-4 border-gray-200')}></div>
			</>
		</div>
	);
}
