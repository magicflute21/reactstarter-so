import React, { Component, Fragment} from "react";
import '/dist/style/tailwind/tailwindBuild.css';
// import { PaginationTable } from './components/PaginationTable';
import {hot} from "react-hot-loader";
// import { CheckIcon, ChevronDownIcon, LinkIcon, PencilIcon } from '@heroicons/react/solid';
import { ServiceAdvisorIcon, WalletIcon } from './assets/Icons';
import { Menu, Transition } from '@headlessui/react';
import Badge from './components/Badge';
import HorizontalSteps from './components/HorizontalSteps';
import DividerToolbar from './components/DividerToolbar';
import HighlightsCard from './components/HighlightsCard';
import Tabs from './components/Tabs';


function App(){
    return(
      <div className="App">
        {/* <PaginationTable /> */}
        <div className='w-full h-screen bg-gray-50'>
			<div className='flex items-center justify-between py-2.5 px-6 bg-white flex-col'>
				<div className='flex w-full'>
					<div className='items-center flex-1 min-w-0'>
						<div className='flex flex-1 min-w-0 items-center'>
							<h2 className='mr-3 text-2xl inline font-bold leading-8 text-gray-700 sm:truncate'>Repair Order</h2>
							<Badge label='New' />
						</div>
						<div className='mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6'>
							<div className='mt-0.5 flex items-center text-xs font-medium text-gray-500'>
								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
								Martin Dimitrov
							</div>
						</div>
					</div>
					<div className='min-w-0'>
						<HorizontalSteps />
					</div>
					<div className='flex-1 items-center mt-5 flex lg:mt-0 lg:ml-4 justify-end'>
						<a href='#' class='mr-4 flex items-center'>
							<WalletIcon strokeWidth='1.5' className='stroke-current flex-shrink-0 h-6 w-6 text-gray-500' aria-hidden='true' />
							<div class='ml-3'>
								<p class='text-xs font-medium text-gray-500'>Customer Total</p>
								<p class='text-xl font-bold text-gray-700'>€0.00</p>
							</div>
						</a>
						<span className='sm:ml-3'>
							<button
								type='button'
								className='inline-flex items-center px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm leading-tight font-medium text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
								Save
							</button>
						</span>
					</div>
				</div>
				<dl className='mt-3 mx-6 grid grid-cols-5 gap-5 w-full'>
					<div className='relative bg-white py-4 px-4 border border-gray-200 rounded-md overflow-hidden'>
						<dt>
							<div className='absolute bg-blue-900 rounded-md p-3'>
								<WalletIcon strokeWidth='1.5' className='stroke-current flex-shrink-0 h-6 w-6 text-blue-200' aria-hidden='true' />
							</div>
							<p className='ml-16 text-base font-semibold text-blue-900 truncate'>Emily Selman</p>
						</dt>
						<dd className='ml-16 pt-1 flex flex-col items-baseline'>
							<div className='mb-2 flex items-center font-medium text-xs text-gray-500'>
								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
								emilyselman@example.com
							</div>
							<div className='mb-2 flex items-center font-medium text-xs text-gray-500'>
								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
								+4916090038800
							</div>
						</dd>
					</div>
					<div className='relative bg-white py-4 px-4 border border-gray-200 rounded-md overflow-hidden'>
						<dt>
							<div className='absolute bg-blue-900 rounded-md p-3'>
								<WalletIcon strokeWidth='1.5' className='stroke-current flex-shrink-0 h-6 w-6 text-blue-200' aria-hidden='true' />
							</div>
							<p className='ml-16 text-base font-semibold text-blue-900 truncate'>SUBARU</p>
							<p className='ml-16 text-base font-semibold text-blue-900 truncate'>Impreza 2.0 Standard XC</p>
						</dt>
						<dd className='ml-16 pt-1 flex flex-col items-baseline'>
							<div className='mb-2 flex items-center font-medium text-xs text-gray-500'>
								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
								JF1XDKL0AA0058028
							</div>
							<div className='mb-2 flex items-center font-medium text-xs text-gray-500'>
								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
								35,241 km
							</div>
						</dd>
					</div>
					<HighlightsCard title='Total Required Capacity' value='3h 15m' button='Capacity Overview' />
					<HighlightsCard title='Total Time Stamped' value='0h 00m' button='Stampings Overview' />
					<HighlightsCard title='Customer Total' value='€150.03' button='Totals Overview' />
				</dl>
				<Tabs />
			</div>

			<DividerToolbar />
		</div>
      </div>
    );
}

export default hot(module) (App);




// function classNames(...classes) {
// 	return classes.filter(Boolean).join(' ');
// }

// export default function App() {
// 	return (
// 		<div className='w-full h-screen bg-gray-50'>
// 			<div className='flex items-center justify-between py-2.5 px-6 bg-white flex-col'>
// 				<div className='flex w-full'>
// 					<div className='items-center flex-1 min-w-0'>
// 						<div className='flex flex-1 min-w-0 items-center'>
// 							<h2 className='mr-3 text-2xl inline font-bold leading-8 text-gray-700 sm:truncate'>Repair Order</h2>
// 							<Badge label='New' />
// 						</div>
// 						<div className='mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6'>
// 							<div className='mt-0.5 flex items-center text-xs font-medium text-gray-500'>
// 								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
// 								Martin Dimitrov
// 							</div>
// 						</div>
// 					</div>
// 					<div className='min-w-0'>
// 						<HorizontalSteps />
// 					</div>
// 					<div className='flex-1 items-center mt-5 flex lg:mt-0 lg:ml-4 justify-end'>
// 						<a href='#' class='mr-4 flex items-center'>
// 							<WalletIcon strokeWidth='1.5' className='stroke-current flex-shrink-0 h-6 w-6 text-gray-500' aria-hidden='true' />
// 							<div class='ml-3'>
// 								<p class='text-xs font-medium text-gray-500'>Customer Total</p>
// 								<p class='text-xl font-bold text-gray-700'>€0.00</p>
// 							</div>
// 						</a>
// 						<span className='sm:ml-3'>
// 							<button
// 								type='button'
// 								className='inline-flex items-center px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm leading-tight font-medium text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
// 								Save
// 							</button>
// 						</span>
// 					</div>
// 				</div>
// 				<dl className='mt-3 mx-6 grid grid-cols-5 gap-5 w-full'>
// 					<div className='relative bg-white py-4 px-4 border border-gray-200 rounded-md overflow-hidden'>
// 						<dt>
// 							<div className='absolute bg-blue-900 rounded-md p-3'>
// 								<WalletIcon strokeWidth='1.5' className='stroke-current flex-shrink-0 h-6 w-6 text-blue-200' aria-hidden='true' />
// 							</div>
// 							<p className='ml-16 text-base font-semibold text-blue-900 truncate'>Emily Selman</p>
// 						</dt>
// 						<dd className='ml-16 pt-1 flex flex-col items-baseline'>
// 							<div className='mb-2 flex items-center font-medium text-xs text-gray-500'>
// 								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
// 								emilyselman@example.com
// 							</div>
// 							<div className='mb-2 flex items-center font-medium text-xs text-gray-500'>
// 								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
// 								+4916090038800
// 							</div>
// 						</dd>
// 					</div>
// 					<div className='relative bg-white py-4 px-4 border border-gray-200 rounded-md overflow-hidden'>
// 						<dt>
// 							<div className='absolute bg-blue-900 rounded-md p-3'>
// 								<WalletIcon strokeWidth='1.5' className='stroke-current flex-shrink-0 h-6 w-6 text-blue-200' aria-hidden='true' />
// 							</div>
// 							<p className='ml-16 text-base font-semibold text-blue-900 truncate'>SUBARU</p>
// 							<p className='ml-16 text-base font-semibold text-blue-900 truncate'>Impreza 2.0 Standard XC</p>
// 						</dt>
// 						<dd className='ml-16 pt-1 flex flex-col items-baseline'>
// 							<div className='mb-2 flex items-center font-medium text-xs text-gray-500'>
// 								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
// 								JF1XDKL0AA0058028
// 							</div>
// 							<div className='mb-2 flex items-center font-medium text-xs text-gray-500'>
// 								<ServiceAdvisorIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
// 								35,241 km
// 							</div>
// 						</dd>
// 					</div>
// 					<HighlightsCard title='Total Required Capacity' value='3h 15m' button='Capacity Overview' />
// 					<HighlightsCard title='Total Time Stamped' value='0h 00m' button='Stampings Overview' />
// 					<HighlightsCard title='Customer Total' value='€150.03' button='Totals Overview' />
// 				</dl>
// 				<Tabs />
// 			</div>

// 			<DividerToolbar />
// 		</div>
// 	);
// }