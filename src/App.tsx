import {
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  Heart,
} from 'phosphor-react';

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center bg-[#1E1E1E]'>
      {/* center the envelope */}
      <main className='flex-1 flex items-center justify-center'>
        <div className='wrapper !bg-[#2F2F2F]'>
          <div className='lid one'></div>
          <div className='lid two'></div>
          <div className='envelope'></div>

          {/* letter content */}
          <div className='letter shadow-[0_8px_20px_rgba(0,0,0,0.25)] border border-black/5'>
            <div className='flex h-full w-full flex-col items-center justify-start px-4 py-4'>
              {/* message */}
              <p className='!text-[16px] text-[#111111] text-center !mb-4 '>
                Knot just another candidate.
              </p>

              {/* icons row */}
              <div className='flex items-center gap-2 mt-2 text-[#3B4049]/80 '>
                <a
                  href='https://github.com/J-Walters'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                  title='GitHub'
                  className='p-1 rounded transition-transform duration-150 hover:text-[#AAAAAA] hover:scale-110
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AAAAAA]/60'
                >
                  <GithubLogo size={22} weight='fill' />
                </a>
                <a
                  href='https://www.linkedin.com/in/walters-jordan'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  title='LinkedIn'
                  className='p-1 rounded transition-transform duration-150 hover:text-[#AAAAAA] hover:scale-110
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AAAAAA]/60'
                >
                  <LinkedinLogo size={22} weight='fill' />
                </a>
                <a
                  href='mailto:jwalters012@gmail.com'
                  aria-label='Email Jordan'
                  title='Email'
                  className='p-1 rounded transition-transform duration-150 hover:text-[#AAAAAA] hover:scale-110
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AAAAAA]/60'
                >
                  <PaperPlaneTilt size={22} weight='fill' />
                </a>
              </div>
            </div>
          </div>
          <p className='mt-3 text-xs text-white/50 transition-opacity duration-300 group-hover:opacity-0'>
            Hover to open
          </p>
        </div>
      </main>
      {/* <p className=' !text-xs text-white/50'>Hover to open</p> */}

      {/* pinned footer */}
      <footer className='w-full border-t border-white/20 !py-2.5 '>
        <p className='text-sm text-white/70 flex items-center justify-center gap-2'>
          Made with <Heart size={14} weight='fill' className='text-red-500' />{' '}
          Jordan Walters
        </p>
      </footer>
    </div>
  );
}

export default App;
