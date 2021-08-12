/* This example requires Tailwind CSS v2.0+ */
import { MilestoneIcon } from '../assets/Icons';
import React from 'react'

const steps = [
	{ name: 'Check In', href: '#', status: 'current' },
	{ name: 'Reception', href: '#', status: 'milestone' },
	{ name: 'Scope Confirmed', href: '#', status: 'upcoming' },
	{ name: 'Quality Repair', href: '#', status: 'milestone' },
	{ name: 'Work Completed', href: '#', status: 'upcoming' },
	{ name: 'Delivery', href: '#', status: 'milestone' },
	{ name: 'Gate Pass', href: '#', status: 'upcoming' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function HorizontalSteps() {
	return (
		<nav aria-label='Progress' className='mb-6'>
			<ol className='flex items-center'>
				{steps.map((step, stepIdx) => (
					<li key={step.name} className={classNames(step.status == 'milestone' ? 'px-2' : 'px-6', 'relative')}>
						{step.status === 'complete' ? (
							<>
								<div className='absolute inset-0 flex items-center' aria-hidden='true'>
									<div className='h-0.5 w-full bg-blue-900' />
								</div>
								<a href='#' className='relative w-6 h-6 flex items-center justify-center bg-blue-900 rounded-full hover:bg-indigo-900'>
									<MilestoneIcon className='w-3 h-3 text-white' aria-hidden='true' />
									<span className='sr-only'>{step.name}</span>
								</a>
							</>
						) : step.status === 'current' ? (
							<>
								<div className='absolute inset-0 flex items-center justify-end' aria-hidden='true'>
									<div className='h-0.5 w-1/2 bg-blue-900' />
								</div>
								<a href='#' className='relative w-6 h-6 flex items-center justify-center bg-white border-2 border-blue-900 rounded-full' aria-current='step'>
									<span className='h-2 w-2 bg-blue-900 rounded-full' aria-hidden='true' />
									<span className='absolute min-w-max top-6 text-xs text-blue-900 font-medium'>{step.name}</span>
								</a>
							</>
						) : step.status === 'milestone' ? (
							<>
								<div className='flex items-center text-xs text-gray-500 font-medium'>
									<MilestoneIcon strokeWidth='2' className='stroke-current flex-shrink-0 mr-1 h-4 w-4 text-gray-500' aria-hidden='true' />
									{step.name}
								</div>
							</>
						) : (
							<>
								<div className='absolute inset-0 flex items-center' aria-hidden='true'>
									<div className='h-0.5 w-1/2 bg-gray-200' />
									{stepIdx == steps.length - 1 ? <div className='hidden h-0.5 w-1/2 bg-gray-200' /> : <div className='h-0.5 w-1/2 bg-gray-200' />}
								</div>
								<a href='#' className='group relative w-6 h-6 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400'>
									<span className='h-2 w-2 bg-transparent rounded-full group-hover:bg-gray-300' aria-hidden='true' />
									<span className='absolute min-w-max top-6 text-xs text-gray-500 font-medium'>{step.name}</span>
								</a>
							</>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}
