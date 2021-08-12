import { WalletIcon } from '../assets/Icons';
import React from 'react'

export default function HighlightsCard(props) {
	return (
		<div className='relative bg-white pt-4 px-4 pb-12 border border-gray-200 rounded-md overflow-hidden'>
			<dt>
				<div className='absolute bg-blue-900 rounded-md p-3'>
					<WalletIcon strokeWidth='1.5' className='stroke-current flex-shrink-0 h-6 w-6 text-blue-200' aria-hidden='true' />
				</div>
				<p className='ml-16 text-sm font-medium text-gray-700 truncate'>{props.title}</p>
			</dt>
			<dd className='ml-16 pb-4 flex items-baseline'>
				<p className='flex items-baseline text-2xl font-bold text-blue-900'>{props.value}</p>
				<div className='absolute bottom-0 inset-x-0 bg-gray-100 px-4 py-3.5'>
					<div className='text-sm'>
						<a href='#' className='font-medium text-gray-700'>
							{' '}
							{props.button}
						</a>
					</div>
				</div>
			</dd>
		</div>
	);
}
