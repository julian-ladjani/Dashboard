package epitech.dashboard;

import android.os.AsyncTask;
import android.util.Log;


import com.fasterxml.jackson.databind.JsonNode;

import org.json.JSONArray;
import org.json.JSONException;

public class testRequest extends AsyncTask<String, Void, JsonNode> {
    private boolean _isInBackground = true;
    private volatile JsonNode node = null;

    @Override
    protected JsonNode doInBackground(String... strings) {
        _isInBackground = true;
    }

    @Override
    protected void onPostExecute(JsonNode jsonNode) {
        _isInBackground = false;
        node = jsonNode;
        super.onPostExecute(jsonNode);
    }

    public JsonNode getNode() {
        while (_isInBackground);
        return node;
    }
}
