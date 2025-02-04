import json
import boto3
import json
import requests

session = boto3.session.Session()
client = session.client(
    service_name='secretsmanager',
    region_name="eu-central-1"
    )

def handler(event, context):
    attachments = []
    for record in event.get('Records', []):
        msg = record.get('Sns', {}).get('Message', "")
        if msg:
            attachments.append(create_payload(json.loads(msg)))

    requests.post(
        url=get_slack_webhook_url2(),
        json=dict(attachments=attachments)
    )
    
    return dict(status_code=200, body="")

def create_payload(msg):
    colors = dict(OK='good', INSUFFICIENT_DATA='warning', ALARM='danger')

    return {
        'mrkdwn_in': ['text'],
        'title': f"{msg['Region']} -- {msg['AlarmName']}",
        'title_link': f"https://{msg['AWSAccountId']}.signin.aws.amazon.com/console/cloudwatch",
        'text': f"Alarm `{msg['AlarmName']}` is in state `{msg['NewStateValue']}`\n\n{msg['NewStateReason']}",
        'color': colors.get(msg['NewStateValue'], '#bfbfbf'),
    }

def get_slack_webhook_url2():
    get_secret_value_response = client.get_secret_value(
        SecretId="slack_webhook_url2"
        )
    response = get_secret_value_response['SecretString']
    slack_webhook_url2 = json.loads(response)['url']
    
    return slack_webhook_url2