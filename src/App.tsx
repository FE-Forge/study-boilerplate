function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800'>
      <nav className='px-6 py-6'>
        <div className='container mx-auto flex items-center justify-between'>
          <h1 className='text-2xl font-bold text-white'>FrontendForge</h1>
          <div className='flex items-center gap-4'>
            <a
              href='https://github.com/FE-Forge'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors'
            >
              <svg
                viewBox='0 0 24 24'
                className='w-7 h-7 fill-current'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
              </svg>
            </a>
            <a
              href='https://magic-maize-ed3.notion.site/1dc9e24072ec80818a33f90a81e4630b?pvs=4'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors'
            >
              <svg viewBox='0 0 24 24' className='w-7 h-7 fill-current'>
                <path d='M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z' />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <main className='container mx-auto px-6 py-20'>
        <div className='text-center'>
          <h2 className='text-3xl lg:text-5xl font-bold text-white mb-6'>
            프론트엔드 실전 스터디
          </h2>
          <p className='text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            React와 TypeScript를 기반으로, 실제 서비스에서 자주 활용되는 기능을
            직접 구현하고, 구현한 로직과 코드 구조를 설명하고 팀원들과 리뷰하는
            실전형 스터디입니다.
          </p>
        </div>
        <div className='text-center'>
          <a
            href='https://magic-maize-ed3.notion.site/1dc9e24072ec80818a33f90a81e4630b?pvs=4'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors'
          >
            <svg className='w-6 h-6' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z' />
            </svg>
            스터디 노션 확인하기
          </a>
        </div>

        <div className='mt-14 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-gray-800 p-8 rounded-lg'>
            <div className='flex items-center gap-4'>
              <div className='text-blue-500 text-3xl mb-4'>💻</div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                단계별 실전 프로젝트
              </h3>
            </div>
            <p className='text-gray-400'>
              Multi Step Form, Dynamic Filtering 등 실무에서 자주 사용되는
              기능들을 3주간 단계별로 구현합니다. 매주 새로운 도전과 함께
              성장하세요.
            </p>
          </div>
          <div className='bg-gray-800 p-8 rounded-lg'>
            <div className='flex items-center gap-4'>
              <div className='text-green-500 text-3xl mb-4'>🔍</div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                코드 리뷰 중심 학습
              </h3>
            </div>
            <p className='text-gray-400'>
              단순 구현을 넘어 코드의 의도와 흐름, 가독성과 유지보수성을
              중점적으로 리뷰하며 함께 성장합니다.
            </p>
          </div>
          <div className='bg-gray-800 p-8 rounded-lg'>
            <div className='flex items-center gap-4'>
              <div className='text-purple-500 text-3xl mb-4'>🚀</div>
              <h3 className='text-xl font-semibold text-white mb-4'>
                실력 향상 집중
              </h3>
            </div>
            <p className='text-gray-400'>
              4인 소규모 스터디로 진행되며, 코드 구조 설계와 리팩토링에 집중하여
              실질적인 실력 향상을 목표로 합니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
