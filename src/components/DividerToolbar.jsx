/* This example requires Tailwind CSS v2.0+ */
// import { AnnotationIcon, PaperClipIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { ArrowDownIcon, FavoritesIcon, PinIcon, TabsIcon } from '../assets/Icons';
import React from 'react'

export default function DividerToolbar() {
	return (
		<div className='relative -mt-3'>
			<div className='absolute inset-0 flex items-center' aria-hidden='true'>
				<div className='w-full border-t border-gray-200' />
			</div>
			<div className='relative flex justify-center h-6'>
				<span className='relative z-0 inline-flex shadow-sm rounded-md -space-x-px'>
					<button
						type='button'
						className='relative inline-flex items-center px-3 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'>
						<span className='sr-only'>Edit</span>
						<ArrowDownIcon strokeWidth='2' className='stroke-current flex-shrink-0 h-4 w-4 text-gray-500' aria-hidden='true' />
					</button>
					<button
						type='button'
						className='relative inline-flex items-center px-3 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'>
						<span className='sr-only'>Attachment</span>
						<FavoritesIcon strokeWidth='2' className='stroke-current flex-shrink-0 h-4 w-4 text-gray-500' aria-hidden='true' />
					</button>
					<button
						type='button'
						className='relative inline-flex items-center px-3 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'>
						<span className='sr-only'>Annotate</span>
						<TabsIcon strokeWidth='2' className='stroke-current flex-shrink-0 h-4 w-4 text-gray-500' aria-hidden='true' />
					</button>
					<button
						type='button'
						className='relative inline-flex items-center px-3 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'>
						<span className='sr-only'>Delete</span>
						<PinIcon strokeWidth='2' className='stroke-current flex-shrink-0 h-4 w-4 text-gray-500' aria-hidden='true' />
					</button>
				</span>
			</div>
		</div>
	);
}
