#[macro_use]
extern crate diesel;
#[macro_use]
extern crate rocket;
#[macro_use]
extern crate rocket_contrib;
pub mod ad;
pub mod car;
pub mod schema;
pub mod user;
use crate::user::api::ROUTES as USER_ROUTES;
use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::Header;
use rocket::{Request, Response};

#[options("/<idk..>")]
pub async fn cors(idk: std::path::PathBuf) -> Option<()> {
    let _ = idk;
    Some(())
}

pub struct CORS();

#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to requests",
            kind: Kind::Response,
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new(
            "Access-Control-Allow-Methods",
            "POST, GET, PATCH, OPTIONS",
        ));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}

#[database("carage")]
pub struct DB(pub diesel::PgConnection);

#[launch]
pub fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .mount("/", routes![cors])
        .mount("/user", USER_ROUTES.to_vec())
        .attach(CORS())
        .attach(DB::fairing())
}
