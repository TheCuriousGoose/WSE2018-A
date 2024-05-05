@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-12 col-lg-6">
            <div class="row flex-wrap card-group mb-0">
                @foreach ($easingData->easingFunctions as $easingFunction)
                    <div class="col-6 mb-2">
                        <div class="card mb-0 easing-card" data-bs-toggle="tooltip" id="{{ Str::slug($easingFunction->text) }}"
                            data-bs-title="{{ $easingFunction->equation }}">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <p class="fw-bold mb-0">{{ $easingFunction->text }}</p>
                                    <span class="ms-auto">
                                        <input type="checkbox" class="form-check-input">
                                    </span>
                                </div>
                                <div class="display-easing-function curve-container">
                                </div>
                            </div>
                            <div class="card-footer">
                                <small class="mb-0">{{ $easingFunction->description }}</small>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            <button data-bs-toggle="modal" data-bs-target="#aboutModal" class="btn btn-primary">About</button>
        </div>
        <div class="col-12 col-lg-6 mb-2">
            <div class="card">
                <div class="card-body">
                    <h3>Easing functions graph</h3>
                    <div id="grapher-container"></div>
                    <div>
                        <label for="graph-slider">
                            Animate graph
                        </label>
                        <div class="d-flex align-items-center gap-2">
                            <input type="number" id="x-indictor" min="0" max="1" step="0.01" value="0" class="form-control w-25">
                            <input type="range" name="easing" id="graph-slider" class="form-range" value="0"
                                min="0" max="1" step="0.01">
                            <button type="" class="btn btn-outline-success" id="play-button">
                                Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
