const PATH_BASE = 'http://localhost:8080';

const PATH_OBAVJESTENJA = '/obavjestenja';
const PATH_OBAVJESTENJA_FIND = '/find';
const PARAM_OBAVJESTENJA_STUDENT = 'student_id=';

const PATH_PREDMETI = '/pohadjanje';
const PATH_PREDMETI_FIND = '/find';
const PARAM_PREDMETI_STUDENT = 'id=';

const PATH_STUDENT = '/student';
const PATH_STUDENT_FIND = '/get';
const PARAM_STUDENT_STUDENT = 'id=';

const PATH_ISPIT = '/ispit';
const PATH_ISPIT_PRIJAVLJENI_FIND = '/find/prijavljeni';
const PATH_ISPIT_NEPRIJAVLJENI_FIND = '/find/neprijavljeni';
const PARAM_ISPIT_STUDENT = 'student_id=';

const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then((val) =>
      hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
    );
    promise.catch((error) =>
      hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });
  
  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

export {
	makeCancelable,

	PATH_BASE,

	PATH_OBAVJESTENJA,
	PATH_OBAVJESTENJA_FIND,
	PARAM_OBAVJESTENJA_STUDENT,
	
	PATH_PREDMETI,
	PATH_PREDMETI_FIND,
	PARAM_PREDMETI_STUDENT,

  PATH_STUDENT,
  PATH_STUDENT_FIND,
  PARAM_STUDENT_STUDENT,

  PATH_ISPIT,
  PATH_ISPIT_PRIJAVLJENI_FIND,
  PATH_ISPIT_NEPRIJAVLJENI_FIND,
  PARAM_ISPIT_STUDENT,
}