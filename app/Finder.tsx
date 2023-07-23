"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface FinderItem {
  name: string;
  icon: string;
  type: 'directory' | 'link' | 'button';
  // directory type
  children?: FinderItem[];
  // link type
  url?: string;
  newTab?: boolean;
  // button type
  onClick?: (e:React.MouseEvent<HTMLElement>) => void;
}

const root: (FinderItem)[] = [
  {
    name: 'Applications',
    icon: '/assets/folder.svg',
    type: 'directory',
    children: [
      {
        name: 'Notes',
        icon: '/assets/notes.svg',
        type: 'link',
        url: '/blog',
        newTab: false
      },
      {
        name: 'Preview',
        icon: '/assets/preview.svg',
        type: 'link',
        url: '',
        newTab: false
      },
      {
        name: 'Safari',
        icon: '/assets/safari.svg',
        type: 'link',
        url: '',
        newTab: false
      },
      {
        name: 'Visual Studio Code',
        icon: '/assets/vscode.svg',
        type: 'link',
        url: '/projects',
        newTab: false
      },
    ]
  },
  {
    name: 'Desktop',
    icon: '/assets/folder.svg',
    type: 'directory',
    children: []
  },
  {
    name: 'Documents',
    icon: '/assets/folder.svg',
    type: 'directory',
    children: [
      {
        name: 'Projects',
        icon: '/assets/folder.svg',
        type: 'directory',
        children: []
      },
      // {
      //   name: 'CV',
      //   icon: '',
      //   type: 'link',
      //   url: '',
      //   newTab: true
      // },
    ]
  },
  // {
  //   name: 'Downloads',
  //   icon: '/assets/folder.svg',
  //   type: 'directory',
  //   children: []
  // },
  // {
  //   name: 'Movies',
  //   icon: '/assets/folder.svg',
  //   type: 'directory',
  //   children: []
  // },
  // // {
  //   name: 'Music',
  //   icon: '/assets/folder.svg',
  //   type: 'directory',
  //   children: []
  // },
  // {
  //   name: 'Pictures',
  //   icon: '/assets/folder.svg',
  //   type: 'directory',
  //   children: []
  // },
];


export default function Finder({ className }: { className?: string }) {
  const documents = root.find(item => item.name==='Documents'); // default to Documents if it exists, else root
  const [current, setCurrent] = useState<FinderItem[]>(documents ? documents.children||[] : root);
  const [history, setHistory] = useState<FinderItem[]>(documents ? [documents] : []);
  const [historyIndex, setHistoryIndex] = useState<number>(documents ? 0 : -1);

  return <div className={`
    ${className}
    flex
    bg-theme-background text-theme-onBackground rounded-xl overflow-hidden shadow-2xl
    `}>
    <div className="min-w-[7rem] flex gap-4 bg-theme-surface">
      <div className="p-4 flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
    </div>
    <div className="flex-1 flex flex-col">
      <div className="px-4 py-2 bg-theme-surface/50 flex items-center gap-3">
        <div className="flex gap-1 text-2xl ">
          <button
            className="p-1 text-theme-onBackground/50 disabled:text-theme-onBackground/20 hover:bg-theme-onBackground/5 disabled:bg-transparent rounded-lg"
            onClick={() => {
              if (historyIndex > 0) {
                setHistoryIndex(historyIndex-1);
                setCurrent(history[historyIndex-1].children || []);
              } else {
                setHistoryIndex(-1);
                setCurrent(root);
              }
            }}
            disabled={historyIndex < 0}
          >
            <FiChevronLeft/>
          </button>

          <button
            className="p-1 text-theme-onBackground/50 disabled:text-theme-onBackground/20 hover:bg-theme-onBackground/5 disabled:bg-transparent rounded-lg"
            onClick={() => {
              if (historyIndex < history.length-1) {
                setHistoryIndex(historyIndex+1);
                setCurrent(history[historyIndex+1].children || []);
              }
            }}
            disabled={historyIndex >= history.length-1}
          >
            <FiChevronRight/>
          </button>
        </div>

        <p className="font-semibold font-display">
          {historyIndex < 0 ? 'linkaiwu' : history[historyIndex].name}
        </p>
      </div>
      
      <div className="px-4 py-4 flex-1 flex items-start gap-5 flex-wrap overflow-y-auto">
        {current.map((item, i) => {
          switch (item.type) {
            case 'directory':
              return <div
                className="w-20 flex flex-col group"
                onClick={() => {
                  setHistory(history.slice(0, historyIndex+1).concat([item]));
                  setCurrent(item.children || []);
                  setHistoryIndex(historyIndex+1);
                }}
                key={i}
              >
                <img
                  src={item.icon}
                  className="p-2 w-full max-h-16 object-contain group-hover:bg-black/5 rounded-md"
                />
                <p className="text-xs text-center mt-2">
                  <span className="px-1 pt-0.5 group-hover:text-theme-onPrimary group-hover:font-medium group-hover:bg-blue-500 rounded-sm">
                    {item.name}
                  </span>
                </p>
              </div>;
            case 'link':
              return <Link
                href={item.url || ""}
                target={item.newTab === undefined || item.newTab ? "_blank" : ""}
                rel="noopener noreferrer"
                key={i}
              >
                <div
                  className="w-20 flex flex-col group"
                >
                  <img
                    src={item.icon}
                    className="p-2 w-full max-h-16 object-contain group-hover:bg-black/5 rounded-md"
                  />
                  <p className="text-xs text-center mt-2">
                    <span className="px-1 pt-0.5 group-hover:text-theme-onPrimary group-hover:font-medium group-hover:bg-blue-500 rounded-sm">
                      {item.name}
                    </span>
                  </p>
                </div>
              </Link>;
            case 'button':
              return <button
                onClick={item.onClick}
                key={i}
              >
                <div className="w-20 flex flex-col group">
                  <img
                    src={item.icon}
                    className="p-2 w-full max-h-16 object-contain group-hover:bg-black/5 rounded-md"
                  />
                  <p className="text-xs text-center mt-2">
                    <span className="px-1 pt-0.5 group-hover:text-theme-onPrimary group-hover:font-medium group-hover:bg-blue-500 rounded-sm">
                      {item.name}
                    </span>
                  </p>
                </div>
              </button>;
            default:
              return <></>;
          }
        })}
      </div>

      <p className="px-3 py-1 text-xs text-theme-onBackground/50 font-medium bg-theme-surface/50">
        linkaiwu{history.slice(0, historyIndex+1).map(item => ` > ${item.name}`)}
      </p>
    </div>
  </div>
}
