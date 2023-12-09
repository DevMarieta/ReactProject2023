import React from 'react';

function Home() {
  return (
    <div>
      <header>
        {/* Вашият HTML код за header */}
      </header>

      <div className="container">
        <main role="main" className="pb-3">
          <form>
            {/* Вашият HTML код за формата */}
          </form>
        </main>
      </div>

      <footer className="border-top footer text-muted">
        {/* Вашият HTML код за footer */}
      </footer>

      {/* Вашите скриптове */}
      <script src="/lib/jquery/dist/jquery.min.js"></script>
      <script src="/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/lib/datatable/datatable.min.js"></script>
      <script src="/js/site.js?v=4q1jwFhaPaZgr8WAUSrux6hAuh0XDg9kPS3xIVq36I0"></script>
    </div>
  );
}

export default Home;
