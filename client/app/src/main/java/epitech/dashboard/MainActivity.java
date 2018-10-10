package epitech.dashboard;

import android.os.AsyncTask;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Base64;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

public class MainActivity extends AppCompatActivity {

    class RESTTask extends AsyncTask<String, Void, ResponseEntity<Person>> {
        protected ResponseEntity<Person> doInBackground(String... uri){
            final String url = uri[0];
            RestTemplate restTemplate = new RestTemplate();
            try {
                restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
                HttpHeaders headers = new HttpHeaders();
                headers.set("token", "Qwpv1_o4qoNaEWTe6C68eg");
                String auth = "PRENOM" + ":" + "NOM";
               String encodedAuth = Base64.encodeToString(auth.getBytes(), Base64.DEFAULT);
                String authHeader = "Basic " + new String(encodedAuth);
                headers.set("Authorization", authHeader);
                HttpEntity<String> entity = new HttpEntity<String>(headers);
                ResponseEntity<Person> response = restTemplate.exchange(url, HttpMethod.GET, entity, Person.class);
                return response;
            } catch (Exception e) {
                String message = e.getMessage();
                return null;
            }
        }

        protected void onPostExecute(ResponseEntity<Person> result) {
            HttpStatus statusCode = result.getStatusCode();
            Person personReturn = result.getBody();
        }
    }

    public void sendMessage(View view) {
        final String uri = "https://app.fakejson.com/q";
        new RESTTask().execute(uri);
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
