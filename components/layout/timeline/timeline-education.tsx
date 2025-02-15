"use client";
import { formatMonthYear } from '@/lib/datetime'
import Image from 'next/image'
import React from 'react'
import EducationImage from '@/public/assets/image/education.png'
import Link from 'next/link'
import { motion } from "framer-motion";
import siteMetadata from '@/lib/siteMetaData';

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TimelineEducation = ({
  schoolName,
  fieldOfStudy,
  title,
  description,
  logoUrl,
  startedAt,
  finishedAt,
  titleNow,
  websiteUrl,
  locale
}: {
  schoolName: string,
  fieldOfStudy: string,
  title: string,
  description: string,
  startedAt: string,
  titleNow: string,
  finishedAt: string | null,
  logoUrl: string | null,
  websiteUrl: string | null,
  locale: string
}) => {

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 1 * stagger,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <div className='flex min-h-[200px] font-sans pb-2'>
        <div className='flex flex-col'>
          <Link href={websiteUrl ?? ''} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg p-2">
            {
              siteMetadata.appUrl && logoUrl ? <Image
                priority
                src={siteMetadata.apiUrl + '/' + logoUrl}
                width={100}
                height={100}
                alt={title ?? 'education'}
              /> : 
              <Image
                priority
                src={EducationImage}
                width={100}
                height={100}
                alt={title ?? 'education'}
              />
            }
          </Link>
          {/* line */}
          <div className='mt-2 w-px grow self-center bg-black dark:bg-white'></div>
        </div>
        <div className='flex-initial pl-4'>
          <div className='font-bold text-black dark:text-white'>{schoolName}</div>
          <div className='text-sm text-zinc-600 dark:text-zinc-400'>
            <span>{title} - {fieldOfStudy} ({formatMonthYear(startedAt, locale)} {finishedAt ? `- ${formatMonthYear(finishedAt, locale)}` : `- ${titleNow}`})</span>
          </div>
          <div className='whitespace-pre-wrap pb-5 pt-3 text-zinc-600 dark:text-zinc-500'>
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TimelineEducation
