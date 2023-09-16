"use client";
export default function Error({ error, reset }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div class="alert alert-danger" role="alert">
            {error.message}
          </div>
        </div>
      </div>
    </div>
  );
}
