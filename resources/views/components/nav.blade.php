<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
        <a class="navbar-brand" href="#">{{ config('app.name') }}</a>
        <div id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <div class="d-none d-lg-block">
                    <li class="nav-item">
                        <button data-bs-toggle="modal" data-bs-target="#aboutModal" class="nav-link">About</button>
                    </li>
                </div>
                <div class="d-block d-lg-none">
                    <li class="nav-item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#aboutModal" class="nav-link info-icon">
                            i
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</nav>

<div class="modal fade-in-right" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="aboutModalLabel">About</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          This is a website to demonstrate multiple easing methods. Click on the cards and you can play the animation of the curve.
        </div>
      </div>
    </div>
  </div>
